import React,{useState} from 'react'
import {Container, Grid,Input,InputAdornment,Button } from '@material-ui/core'
import Image from 'next/image'
import Axios from 'axios'
import Paper from '@material-ui/core/Paper'
import {Formik} from 'formik'
import {HashLoader} from 'react-spinners'
import Check from '@material-ui/icons/CheckCircleOutlineRounded'


const Contact=()=>{
    const [loading,setLoading]=useState({
        done:false,
        pending:false
    })
    return (
     
            <Grid  style={{zIndex:1000}} container justify='center'>
              <Paper className='contact' elevation={10}>
              <div style={{backgroundColor:'rgba(0,0,0,0.6)',height:'100%',width:'100%'}}>
              <h4 style={{textAlign:'center',color:'#ffab00'}}>
                    Contact us
                </h4>
                <p style={{textAlign:'center',fontSize:20,color:'white'}}>
                    Get in touch with us
                </p>
                <form>
                    <Formik initialValues={{message:''}} onSubmit={(value)=>{
                        let item={
                            message:value.message,
                            
                        }
                        setLoading({
                            pending:true,
                            done:false
                        })
                        Axios.post('/api/message',{item})
                        .then((res)=>{
                           if(res.data=='SUCCESS'){
                            console.log(res.data)
                            setLoading({
                                pending:false,
                                done:true
                            })
                           }
                        })
                        .catch((err)=>{
                            console.log(err.response)
                            //console.log('wahala')
                           if(err.response.data=='mongo wahala'){
                            alert('Unnable to connect to the server please try again later')
                            setLoading({
                              pending:false,
                              done:false,
                            })
                           }
                           
                          })

                    }} >{({handleChange,handleSubmit,values})=>((
                        <Grid container justify='center'>
                            <Grid container justify='center'>
                            <Input
             className='app-input contact-input '
             style={{color:'white',width:'80%',marginTop:80}}
             placeholder='message'
               id="input-with-icon-adornment"
               color='primary'
               autoComplete={false}
               type='text'
               value={values.message}
               onChange={handleChange('message')}
               startAdornment={
                 <InputAdornment position="start">
                  
                 </InputAdornment>
               }
             />
                            </Grid>
             <Grid>
                 {
                     !loading.pending && !loading.done ?
                     <Grid>
                         <Button onClick={handleSubmit}>
                           <span style={{color:'white',border:'3px solid #ffab00',width:100,borderRadius:20,height:60,display:'grid',placeItems:'center',marginTop:60}}>
                               Send
                           </span>
                         </Button>
                     </Grid>
                     :
                     loading.pending && !loading.done ?
                     <Grid style={{marginTop:60}} container justify='center'>
                         <HashLoader loading={true}  size={40} color='#ffab00' />
                     </Grid>
                     :
                     loading.done && !loading.pending ?
                     <Grid style={{marginTop:60}} container justify='center'>
                         <Check />
                     </Grid>
                     :
                     null
                 }
             </Grid>
             
                        </Grid>
                        
                    ))}
                  
                    </Formik>

                </form>

              </div>
              </Paper>
            </Grid>

    )


}

export default Contact