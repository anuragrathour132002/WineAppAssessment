import React from 'react';
import { calculatedMean, calculatedMedian, calculatedMode } from '../../functions';
import './index.css';
import { Table } from '@mantine/core';


function table({ propertyName, data }) {

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Measure</Table.Th>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <Table.Th key={classes?.alcohol}>{`Class ${classes?.alcohol}`}</Table.Th>
                            )
                        })
                    }
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>{`${propertyName} Mean`}</Table.Td>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <Table.Td key={classes?.alcohol}>{calculatedMean(classes?.dataSet, propertyName)}</Table.Td>
                            )
                        })
                    }
                </Table.Tr>
                <Table.Tr>
                    <Table.Td> {`${propertyName} Median`}</Table.Td>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <Table.Td key={classes?.alcohol}>{calculatedMedian(classes?.dataSet, propertyName)}</Table.Td>
                            )
                        })
                    }
                </Table.Tr>
                <Table.Tr>
                    <Table.Td>{`${propertyName} Mode`}</Table.Td>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <Table.Td key={classes?.alcohol}>{calculatedMode(classes?.dataSet, propertyName)}</Table.Td>
                            )
                        })
                    }
                </Table.Tr>
            </Table.Tbody>
        </Table>
    )
}

export default table