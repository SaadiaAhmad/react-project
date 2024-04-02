function Table({ data, config }) {

    const renderedHeaders = config.map((item) =>
        (
            <th>{item.label}</th>
        )
    )
    const renderedTableRows = data.map((item) => 
        (<tr key={item.name} className="border-b">
            <td className="p-3">{item.name}</td>
            <td className="p-3">
                <div className={`p-3 m-2 ${item.color} border-2`}></div>
            </td>
            <td className="p-3">{item.score}</td>
        </tr>)
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