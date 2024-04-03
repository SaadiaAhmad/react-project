import { useState } from "react";
import Table from "../Table/Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

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

    const getIcons = (label) => {
        if(label !== sortBy) {
            return (
                <div>
                    <GoArrowSmallUp></GoArrowSmallUp>
                    <GoArrowSmallDown></GoArrowSmallDown>
                </div>
            )
        } 

        if(sortOrder === null) {
            return (
                <div>
                    <GoArrowSmallUp></GoArrowSmallUp>
                    <GoArrowSmallDown></GoArrowSmallDown>
                </div>
            )
        }
        else if(sortOrder === 'asc') {
            return (
                <div>
                    <GoArrowSmallUp></GoArrowSmallUp>
                </div>
            )
        }
        else {
            return (
                <div>
                    <GoArrowSmallDown></GoArrowSmallDown>
                </div>
            )
        }
    }

    const updatedConfig = config.map((column) => {
        if(column.sortValue) return {
            ...column,
            header: () => 
            <th className="p-2 cursor-pointer hover:bg-gray-100" onClick={() => handleHeaderClick(column.label)}>
                <div className="flex items-center">
                    {getIcons(column.label)}
                    {column.label}
                </div>
            </th>
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