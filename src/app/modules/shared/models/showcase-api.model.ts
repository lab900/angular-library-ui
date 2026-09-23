/**
 * A group of symbols in the API tab of a showcase page
 */
export interface ShowcaseApiSection {
  title: string;
  /** One sentence below the title: what the symbols are for */
  description?: string;
  /** Exported names from `@lab900/ui`, in the order to show them */
  symbols: string[];
  /**
   * For components that consumers pass as a class in a config object, like cell renderers.
   * The API tab then shows the two config fields instead of the inputs, and the fields of the options interface
   * (the first type argument of the base class) inline.
   */
  usage?: {
    /** Config field that takes the component class, for example `cellRenderer` */
    classKey: string;
    /** Config field that takes the options, for example `cellRenderOptions` */
    optionsKey: string;
  };
}

/**
 * The file that `scripts/generate-api-docs.mjs` writes
 */
export interface ApiDocs {
  symbols: Record<string, ApiSymbol>;
}

export interface ApiSymbol {
  name: string;
  kind: 'component' | 'directive' | 'interface' | 'type';
  typeParameters?: string;
  /** Path in the repository, with the line */
  source: string;
  description?: string;
  example?: string;
  deprecated?: string | true;
  selector?: string;
  abstract?: boolean;
  extends?: string[];
  /** The type of a type alias */
  type?: string;
  members?: ApiMember[];
}

export interface ApiMember {
  name: string;
  /** Only set on component and directive members */
  kind?: 'input' | 'model' | 'output';
  type: string;
  required?: boolean;
  optional?: boolean;
  default?: string;
  /** `signal`: a value, a function of the data, or a signal. `function`: a value or a function of the data. */
  reactive?: 'signal' | 'function';
  inheritedFrom?: string;
  description?: string;
  example?: string;
  deprecated?: string | true;
}
