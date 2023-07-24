import { Paper } from '@mui/material';

export default function Card(props){
    return(
        <Paper className='Card' elevation={0} sx={{bgcolor:'white',boxShadow: 3, p:3, pt:1, m:2}}>{props.content}</Paper>
    )

}