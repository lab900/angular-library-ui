import { TestBed } from '@angular/core/testing';
import { Lab900TableService } from './table.service';

class ResizeObserverMock {
  public static instances: ResizeObserverMock[] = [];
  public readonly observe = jest.fn();
  public readonly unobserve = jest.fn();
  public readonly disconnect = jest.fn();

  public constructor(public readonly callback: ResizeObserverCallback) {
    ResizeObserverMock.instances.push(this);
  }

  public trigger(targets: Element[]): void {
    this.callback(
      targets.map(target => ({ target }) as ResizeObserverEntry),
      this as unknown as ResizeObserver
    );
  }
}

describe('Lab900TableService resize observer', () => {
  let service: Lab900TableService;
  const originalResizeObserver = (globalThis as any).ResizeObserver;

  beforeEach(() => {
    ResizeObserverMock.instances = [];
    (globalThis as any).ResizeObserver = ResizeObserverMock;
    TestBed.configureTestingModule({ providers: [Lab900TableService] });
    service = TestBed.inject(Lab900TableService);
  });

  afterEach(() => {
    (globalThis as any).ResizeObserver = originalResizeObserver;
  });

  it('uses one observer for all elements and calls the matching callback', () => {
    const first = document.createElement('div');
    const second = document.createElement('div');
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    service.observeResize(first, firstCallback);
    service.observeResize(second, secondCallback);

    expect(ResizeObserverMock.instances.length).toBe(1);
    const observer = ResizeObserverMock.instances[0];
    expect(observer.observe).toHaveBeenCalledTimes(2);

    observer.trigger([second]);
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledWith(expect.objectContaining({ target: second }));
  });

  it('stops calling the callback of an unobserved element', () => {
    const element = document.createElement('div');
    const callback = jest.fn();
    service.observeResize(element, callback);
    service.unobserveResize(element);

    const observer = ResizeObserverMock.instances[0];
    expect(observer.unobserve).toHaveBeenCalledWith(element);
    observer.trigger([element]);
    expect(callback).not.toHaveBeenCalled();
  });

  it('disconnects the observer when the service is destroyed', () => {
    service.observeResize(document.createElement('div'), jest.fn());
    service.ngOnDestroy();
    expect(ResizeObserverMock.instances[0].disconnect).toHaveBeenCalled();
  });
});
