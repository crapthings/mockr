import { Draggable } from 'react-beautiful-dnd'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
export default () => <div>
  <Draggable key={1} draggableId={1}>
    {(provided, snapshot) => <div ref={provided.innerRef} {...provided.dragHandleProps}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>}
  </Draggable>
</div>
