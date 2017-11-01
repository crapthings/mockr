import { Draggable } from 'react-beautiful-dnd'

export default () => <div>
  <ul>
    <li>
      <Draggable key={1} draggableId={1}>
        {(provided, snapshot) => <span ref={provided.innerRef} {...provided.dragHandleProps}>div</span>}
      </Draggable>
    </li>
  </ul>
</div>
