import * as React from 'react';
import PropTypes from 'prop-types';
export default function Banner({ list }) {
  return (
    <>
      <div>
        {list.map((listItem) => (
          <div>{listItem}</div>
        ))}
      </div>
    </>
  );
}
Banner.PropTypes = {
  list: PropTypes.array,
};
