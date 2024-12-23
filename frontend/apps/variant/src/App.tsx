// import React from 'react'
import * as React from 'react';
import { createColumnHelper } from '@tanstack/react-table';

//import { useState } from 'react'
import './App.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/base/ui/accordion"

import {Table} from "components/base/ui/table";

import { variantsData } from './variant_data'


// TODO: TO REMOVE
type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const data: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const firstName = ['david', 'linda', 'michel', 'alex', 'valerie', 'george', 'henri'];
const lastName = ['smiht', 'tremblay', 'washington', 'doe'];
const status = ['relationship', 'friend', 'enemy']

for (let i = 0; i < 100; i++) {
  data.push({
    firstName: firstName[Math.floor(Math.random()*firstName.length)],
    lastName: lastName[Math.floor(Math.random()*lastName.length)],
    age: Math.floor(Math.random() * 100),
    visits: Math.floor(Math.random() * 1000),
    status: status[Math.floor(Math.random()*status.length)],
    progress: Math.floor(Math.random() * 100),
  });
}

const columnHelper = createColumnHelper<Person>()
const columns = [
  columnHelper.accessor('firstName', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'lastName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: info => info.column.id,
  }),
]

export interface AppProps {
  api: string,
}

function App({ api }: AppProps) {
  //const [count, setCount] = useState(0)
  console.log(api);
  return (
    <div className="flex flex-1">
      <aside className="w-1/4 p-4">
        <ul>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Aggregation 1</AccordionTrigger>
                <AccordionContent>
                  <input type="checkbox" id="aggre1" name="aggre1" value="Aggre1" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Aggregation 2</AccordionTrigger>
                <AccordionContent>
                  <input type="checkbox" id="aggre1" name="aggre1" value="Aggre1" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Aggregation 3</AccordionTrigger>
                <AccordionContent>
                  <input type="checkbox" id="aggre1" name="aggre1" value="Aggre1" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </li>
        </ul>
      </aside>

      <main className="flex-1 p-4 h-full">
        <h1 className="text-2xl font-bold">Variant</h1>
        <Table columns={columns} data={data} />
      </main>
    </div >
  )
}

export default App

