import { FunctionalComponent, h } from '@stencil/core';

interface CoIconProps {
  name: string;
  class?: string;
  onClick?: (e: MouseEvent) => void;
  size?: 'small' | 'large';
  slot?: string;
}

export const CoIcon: FunctionalComponent<CoIconProps> = (
  props: CoIconProps
) => {
  const renderCoIcon = (name: string, onClick: (e: MouseEvent) => void) => {
    return (
      <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='currentColor'
        onClick={onClick}
      >
        <use xlinkHref={`/assets/icons.svg#${name}`} />
      </svg>
    );
  };

  const renderIonIcon = (name: string, props: any) => {
    const theIcon = <ion-icon name={name} {...props} />;

    return theIcon;
  };

  const renderFaIcon = (classList: string, props: any) => {
    return <i class={classList} {...props} />; // As of now the free icon sets of font-awesome are "fas" and "fab"
  };

  if (!props.name) {
    return null;
  }

  // Extract name to save it before deletion
  const { name, onClick } = props;
  delete props.name;

  // exract icon selector (co, ion or fa)
  const parts: string[] = name.split('-');
  const selector: string = parts.length === 1 ? 'co' : parts[0];

  switch (selector) {
    case 'co':
      delete props.size;
      return renderCoIcon(parts.slice(1).join('-'), onClick);

    case 'ion':
      // props.size = props.size || 'small';
      // return <ion-icon name='pencil' />;
      return renderIonIcon(parts.slice(1).join('-'), props);

    case 'fa':
      const classList: string = (props.class || '') + ` fas fab ${name}`;
      delete props.class;
      delete props.size;
      return renderFaIcon(classList, props);

    // default:
    //   return null;
  }
};
