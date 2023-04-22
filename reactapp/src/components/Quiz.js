import React, {useEffect,useState} from 'react'
import useStateContext, {stateContext} from '../hooks/useStateContext'
import { ENDPOINTS, createAPIEndpoint } from '../api'
import { Card, CardContent, CardMedia, CardHeader, List, ListItemButton, Typography, Box, LinearProgress } from '@mui/material'

export default function Quiz() {

    const[qns,setQns]=useState([])
    const [qnIndex, setQnIndex] = useState(0)

    useEffect(()=>{
      createAPIEndpoint(ENDPOINTS.question)
      .fetch()
      .then(res=>{
        setQns(res.data)
        console.log(res.data)
      })
      .catch(err=>{console.log(err);})
    },[])

  return (
   qns.length !== 0
   ?<Card>
    <CardContent>
      <Typography variant="h6">
        {/* {qns[qnIndex].Option1} */}
      </Typography>
      {/* <List>
        {qns[qnIndex].options.map((item, idx) =>
        <ListItemButton key={idx} disableRipple>
          <div>
              {item}
          </div>
        </ListItemButton>
        )}
                            
      </List> */}
    </CardContent>

   </Card>
   :null
  )
}
