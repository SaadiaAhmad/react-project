function Table({ data, config, keyFn }) {

    const renderedHeaders = config.map((item) =>
        (
            <th>{item.label}</th>
        )
    )
    const renderedTableRows = data.map((item) => {
        const renderedCells = config.map((column) => 
            (
                <td className="p-2">{column.render(item)}</td>
            )
        );
        return (
            <tr key={keyFn(item)} className="border-b">
                {renderedCells}
            </tr>
        );
    }

    );

    return (
        <table className="table-auto border-spacing-2 m-5">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedTableRows}
            </tbody>
        </table>
    )
}

export default Table;