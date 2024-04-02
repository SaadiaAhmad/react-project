import Table from "./Table/Table";

function TableConatiner() {
    const tableData = [
        {
          name: 'Apple',
          color: 'bg-red-500',
          score: 5
        },
        {
          name: 'Orange',
          color: 'bg-orange-500',
          score: 3
        },
        {
          name: 'Banana',
          color: 'bg-yellow-500',
          score: 4
        },
        {
          name: 'Watermelon',
          color: 'bg-pink-500',
          score: 5
        },
        {
          name: 'Grapes',
          color: 'bg-purple-500',
          score: 3
        }
      ];

      const tableConfig = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            header: () => <th className="bg-red-500">Score</th>,
            label: 'Score',
            render: (fruit) => fruit.score
        }
      ]

      const keyFn = (fruit) => fruit.name;

    return (
        <Table data={tableData} config={tableConfig} keyFn={keyFn}></Table>
    )
}

export default TableConatiner;