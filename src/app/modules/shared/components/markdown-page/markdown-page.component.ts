import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MarkdownModule } from 'ngx-markdown';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lab900-markdown-page',
  templateUrl: './markdown-page.component.html',
  styleUrls: ['./markdown-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MarkdownModule],
})
export default class MarkdownPageComponent {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public readonly filePath = input<string | undefined>(undefined);
  protected routeFilePath = toSignal(
    this.activatedRoute.data.pipe(map((data: { filePath?: string }) => data?.filePath))
  );

  protected readonly path = computed(() => this.routeFilePath() ?? this.filePath());
}
