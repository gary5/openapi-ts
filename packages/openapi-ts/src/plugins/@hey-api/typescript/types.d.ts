import type { StringCase } from '../../../types/case';
import type { DefinePlugin, Plugin } from '../../types';

export type Config = Plugin.Name<'@hey-api/typescript'> & {
  /**
   * By default, enums are generated as TypeScript types. In addition to that,
   * you can choose to generate them as JavaScript objects, TypeScript enums,
   * or TypeScript enums contained within namespaces.
   *
   * @default false
   */
  enums?: 'javascript' | 'typescript' | 'typescript+namespace' | false;
  /**
   * Defines casing of the enum keys. By default, we use `SCREAMING_SNAKE_CASE`.
   * This option has effect only when `enums` is defined.
   *
   * @default 'SCREAMING_SNAKE_CASE'
   */
  enumsCase?: StringCase;
  /**
   * When generating enums as JavaScript objects, they'll contain a null value
   * if they're nullable. This might be undesirable if you want to do
   * `Object.values(Foo)` and have all values be of the same type. This setting
   * is disabled by default to preserve the source schemas.
   *
   * @default false
   */
  enumsConstantsIgnoreNull?: boolean;
  /**
   * Should the exports from the generated files be re-exported in the index
   * barrel file?
   *
   * @default true
   */
  exportFromIndex?: boolean;
  /**
   * By default, inline enums (enums not defined as reusable components in
   * the input file) are generated as inlined union types. You can set
   * `exportInlineEnums` to `true` to treat inline enums as reusable components.
   * When `true`, the exported enums will follow the style defined in `enums`.
   *
   * @default false
   */
  exportInlineEnums?: boolean;
  /**
   * Defines casing of the identifiers. By default, we use `PascalCase`.
   *
   * @default 'PascalCase'
   */
  identifierCase?: Exclude<StringCase, 'SCREAMING_SNAKE_CASE'>;
  /**
   * Name of the generated file.
   *
   * @default 'types'
   */
  output?: string;
  /**
   * Choose how to handle types containing read-only or write-only fields?
   * This option exists for backward compatibility with outputs created before
   * this feature existed.
   *
   * @default 'split'
   */
  readOnlyWriteOnlyBehavior?: 'off' | 'split';
  /**
   * Customize the name of types used in responses or containing read-only
   * fields.
   *
   * @default '{{name}}Readable'
   */
  readableNameBuilder?: string;
  /**
   * Customize the name of types used in payloads or containing write-only
   * fields.
   *
   * @default '{{name}}Writable'
   */
  writableNameBuilder?: string;

  // DEPRECATED OPTIONS BELOW

  /**
   * **This feature works only with the legacy parser**
   *
   * Include only types matching regular expression.
   *
   * @deprecated
   */
  // eslint-disable-next-line typescript-sort-keys/interface
  include?: string;
  /**
   * **This feature works only with the legacy parser**
   *
   * Use your preferred naming pattern
   *
   * @deprecated
   * @default 'preserve'
   */
  style?: 'PascalCase' | 'preserve';
  /**
   * **This feature works only with the legacy parser**
   *
   * Generate a tree of types containing all operations? It will be named
   * $OpenApiTs.
   *
   * @deprecated
   * @default false
   */
  tree?: boolean;
};

export type HeyApiTypeScriptPlugin = DefinePlugin<Config>;
