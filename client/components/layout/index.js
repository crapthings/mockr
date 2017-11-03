import Grid from 'material-ui/Grid'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Mocks from './mocks'

class Layout extends Component {
  render () {
    return <DragDropContext onDragEnd={result => {
      console.log(result)
    }}>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => {
          return <div
            ref={provided.innerRef}
          >
            <Grid container className={'root'}>
              <Grid item xs={10}>
                {children()}
              </Grid>
              <Grid item xs={2}>
                <Mocks />
              </Grid>
            </Grid>
          </div>
        }}
      </Droppable>
    </DragDropContext>
  }
}
