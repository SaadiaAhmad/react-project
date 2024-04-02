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
            label: 'Fruits'
        },
        {
            label: 'Color'
        },
        {
            label: 'Score'
        }
      ]

    return (
        <Table data={tableData} config={tableConfig}></Table>
    )
}

export default TableConatiner;