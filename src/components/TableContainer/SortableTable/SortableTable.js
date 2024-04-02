import { useState } from "react";
import Table from "../Table/Table";

function SortableTable(props) {
    const [ sortOrder, setSortOrder ] = useState(null);
    const [ sortBy, setSortBy ] = useState(null);

    const { config, data } = props;

    const handleHeaderClick = (label) => {
        if(sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        }
        else {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((column) => {
        if(column.sortValue) return {
            ...column,
            header: () => <th className="p-2" onClick={() => handleHeaderClick(column.label)}>{column.label}</th>
        };
        else return column;
    });

    let sortedData = data;
    if(sortOrder && sortBy) {
        const sortColumn = config.find((column) => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortColumn.sortValue(a);
            const valueB = sortColumn.sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if(typeof valueA === 'string') return valueA.localeCompare(valueB) * reverseOrder;
            else return (valueA - valueB) * reverseOrder;
        })
        
    }

    return (
        <Table {...props} config={updatedConfig} data={sortedData}></Table>
    )
}

export default SortableTable;