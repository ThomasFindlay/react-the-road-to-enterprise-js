import { useUserStore } from '@/store/user.store';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { checkPermission } from './checkPermission';

const Permission = (props) => {
  const {
    children,
    noAccess,
    entityOwnerId,
    roles = [],
    type = 'one-of',
    debug = false,
  } = props;

  const user = useUserStore((store) => store.user);

  const [hasAccess, setHasAccess] = useState(
    user
      ? checkPermission(user, roles, {
          type,
          entityOwnerId,
          debug,
        })
      : false
  );

  useEffect(() => {
    if (!user) {
      setHasAccess(false);
      return;
    }
    const doesHaveAccess = checkPermission(user, roles, {
      type,
      entityOwnerId,
      debug,
    });
    setHasAccess(doesHaveAccess);
  }, [user?.id, user?.roles, entityOwnerId, roles, type]);

  const renderNoAccess = () => {
    if (typeof noAccess === 'function') {
      return noAccess({
        user,
        hasAccess,
      });
    }
    return noAccess;
  };

  return hasAccess ? children : renderNoAccess() || null;
};

Permission.propTypes = {
  children: propTypes.node,
  noAccess: propTypes.oneOfType([propTypes.node, propTypes.func]),
  roles: propTypes.arrayOf(propTypes.string).isRequired,
  type: propTypes.oneOf(['one-of', 'all-of']),
  entityOwnerId: propTypes.string,
  debug: propTypes.bool,
};

export default Permission;
