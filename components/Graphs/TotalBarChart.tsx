import 'chart.js/auto';
import { useFetchFormatedExpensesQuery } from '../../queries/expenses/hooks'
import { Center, Heading } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';

export const TotalBarChart = () => {

    const { data, isLoading, isError } = useFetchFormatedExpensesQuery()

    const categoryNames = new Set<string>()

    data.map(expense => {
        expense.categoryNames.map(c => categoryNames.add(c))
    })

    const categoryNamesArray = Array.from(categoryNames)
    const categoryTotals = categoryNamesArray.map(catName => {
        let totalSpend = 0
        data.forEach(expense => {
            if (expense.categoryNames.includes(catName)) {
                totalSpend += expense.total
            }
        })

        return Math.round((totalSpend + Number.EPSILON) * 100) / 100
    })

    const totalSpendAverage: Array<number> = []
    categoryTotals.forEach(num => {
        let avg = categoryTotals.reduce((a: number, b: number) => a + b) / categoryTotals.length
        totalSpendAverage.push(avg)
    })

    const chartData = {
        labels: categoryNamesArray,
        datasets: [
            {
                label: "Total category spend",
                data: categoryTotals,
                backgroundColor: [
                    "#48BB78"
                ]
            },
            {
                label: "Average spend",
                data: totalSpendAverage,
                backgroundColor: [
                    "#ED64A6"
                ]
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
    }

    return (
        <>
            <Center py="4">
                <Heading size="md">Total spend by category</Heading>
            </Center>
            <Bar data={chartData} options={options} />
        </>
    )
}
