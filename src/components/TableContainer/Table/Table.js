import { Fragment } from "react";
import "./Table.css";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((item) => {
    if (item.header)
      return <Fragment key={item.label}>{item.header()}</Fragment>;
    else
      return (
        <th className="p-2 align-middle" key={item.label}>
          {item.label}
        </th>
      );
  });

  const renderedTableRows = data.map((item) => {
    const renderedCells = config.map((column) => (
      <td className="p-2 align-middle text-center" key={column.label}>
        {column.render(item)}
      </td>
    ));
    return (
      <tr key={keyFn(item)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2 m-5 border-2 border-solid">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedTableRows}</tbody>
    </table>
  );
}

export default Table;
