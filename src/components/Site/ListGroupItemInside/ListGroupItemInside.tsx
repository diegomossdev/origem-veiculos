import * as React from 'react';

interface ListGroupItemInsideData {
  name: string;
  subName: string;
}

const ListGroupItemInside: React.FC<ListGroupItemInsideData> = ({name, subName}) => {
  return (
    <>
      <div className="list-group-item-inside l4 text-transoform-uppercase">
        <span>{name}</span>
      </div>
      <div className="list-group-item-inside l8 text-transoform-uppercase">
        {subName}
      </div>
    </>
  );
}

export { ListGroupItemInside };