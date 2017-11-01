import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Mocks from './mocks'

Layout = ({ children }) => <DragDropContext onDragEnd={() => {
  console.log(123)
}}>
  <Droppable droppableId="droppable">
    {(provided, snapshot) => {
      return <div
        ref={provided.innerRef}
      >
        {children()}
        <Mocks />
      </div>
    }}
  </Droppable>
</DragDropContext>
