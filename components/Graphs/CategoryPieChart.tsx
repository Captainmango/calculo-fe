import { Chart, Pie } from 'react-chartjs-2'
import 'chart.js/auto';
import { useFetchFormatedExpensesQuery } from '../../queries/expenses/hooks'
import { Center, Heading } from '@chakra-ui/react';

export const CategoryPiechart = () => {

    const { data, isLoading, isError } = useFetchFormatedExpensesQuery()
    
    const categoryNames = new Set<string>()

    data.map(expense => {
        expense.categoryNames.map(c => categoryNames.add(c))
    })

    const categoryNamesArray = Array.from(categoryNames)
    const categoryCounts = categoryNamesArray.map(catName => {
        let count = 0
        data.forEach(expense => {
            expense.categoryNames.forEach(c => {
                if (c === catName) {
                    count += 1
                }
            })
        })

        return count
    })

    const chartData = {
        labels: categoryNamesArray,
        datasets: [
            {
                label: "Category count",
                data: categoryCounts,
                backgroundColor: [
                    "#FC8181",
                    "#ED8936",
                    "#ECC94B",
                    "#48BB78",
                    "#38B2AC",
                    "#4299E1",
                    "#0BC5EA",
                    "#9F7AEA",
                    "#ED64A6",
                    "#322659",
                    "#065666",
                    "#1A365D",
                    "#5F370E"
                ]
            }
        ]
    }
    
    return ( 
        <>
            <Center py="4">
                <Heading size="md">Expenses count by category</Heading>
            </Center>
            <Pie data={chartData} />      
        </>
    )

}