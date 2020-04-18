import { ReactNodeNoStrings } from './reactNodeNoStrings';

export const normaliseChildrenArray = (
  children: ReactNodeNoStrings,
): ReactNodeNoStrings[] => {
  if (Array.isArray(children)) {
    return children;
  } else if (typeof children === 'undefined') {
    return [];
  } else {
    return [children];
  }
};
