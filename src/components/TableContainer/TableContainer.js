import SortableTable from "./SortableTable/SortableTable";

function TableConatiner() {
    const tableData = [
        {
          name: 'Apple',
          color: 'bg-red-500',
          score: 5
        },
        {
          name: 'Orange',
          color: 'bg-orange-400',
          score: 3
        },
        {
          name: 'Banana',
          color: 'bg-yellow-300',
          score: 4
        },
        {
          name: 'Watermelon',
          color: 'bg-red-600',
          score: 5
        },
        {
          name: 'Grapes',
          color: 'bg-purple-900',
          score: 3
        }
      ];

      const tableConfig = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }
      ]

      const keyFn = (fruit) => fruit.name;

    return (
        <SortableTable data={tableData} config={tableConfig} keyFn={keyFn}></SortableTable>
    )
}

export default TableConatiner;