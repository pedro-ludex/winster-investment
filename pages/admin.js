import React,{useEffect,useState} from 'react'
import {Grid,Paper,Input,InputAdornment,Popper,Button, IconButton} from '@material-ui/core'
import Axios from 'axios'
import {Hashloader} from 'react-spinners'
import {Formik} from 'formik'
import EmailIcon from '@material-ui/icons/PersonOutlined'
import HttpsOutlined from '@material-ui/icons/HttpsOutlined'
import Close from '@material-ui/icons/Close'


const Admin = () => {
    const [data,setData]=useState()
    const [gotten,setGotten]=useState(false)
    const [admin,setAdmin]=useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const username='admin'
    const password='winsteradmin'

    useEffect(()=>{
        Axios.get('/api/all_users')
        .then((res)=>{
           if(res.data.status=='DONE'){
               setData(res.data.info)
               setGotten(true)
           }
        })
    },[])

    const main=()=>{
        if(!admin){
            return(
                <form>
                    <Formik initialValues={{username:'',password:''}} onSubmit={(value)=>{
                        if(value.username==username&&value.password==password){
                            setAdmin(true)
                        }
                        else{
                            alert('Invalid user. BACK OF!!!')
                        }
                    }}>
                        {({handleSubmit,handleChange,values})=>(
                            <Grid container justify='center'>
                                <Paper elevation={5} style={{backgroundColor:'black'}}>
                                    <Grid container justify='center'>
                                    <Input
        className='app-input second-input'
        style={{color:'white'}}
        placeholder='username'
          id=""
          color='primary'
          name='username'
          type='string'
          value={values.username}
          onChange={handleChange('username')}
          startAdornment={
            <InputAdornment position="start">
             <EmailIcon style={{color:"#ffab00"}} />
            </InputAdornment>
          }
        />
                                    </Grid>

            <Grid container justify='center'>
            <Input
        className='app-input'
        style={{color:'white',marginTop:30}}
        placeholder='Password'
          id="input-with-icon-adornment"
          color='primary'
          placeholder='Password'
          autoComplete={false}
          type='password'
          name='password'
          onChange={handleChange('password')}
          value={values.password}
          
          startAdornment={
            <InputAdornment position="start">
            <HttpsOutlined style={{color:"#ffab00"}} />
            </InputAdornment>
          }
          
        />
        <Grid container justify='center' style={{marginTop:40}}>
            <Input style={{width:100,backgroundColor:'white'}} type='submit' value='Enter' onClick={handleSubmit} />
        </Grid>
            </Grid>
                                </Paper>
                            </Grid>
                        )}

                    </Formik>
                </form>
            )
        }
        else if(admin){
            return(
                <div>
                    {showUsers()}
                </div>
            )
        }
    }

    

    const showUsers=()=>{
        if(gotten){
            return (
                <Grid container >
                   {data.map((item)=>(
                       <Grid style={{margin:10,}} container xs={12}>
                           <Paper style={{width:'90%'}}>
                           <Grid  container direction='row'>
                                <Grid xs={3} md={3}>
                                   <p style={{color:'black',fontSize:22}}>
                                       {item.name}
                                   </p>
                                </Grid>
                                <Grid style={{margin:10}} xs={4} md={4}>
                                   <p style={{color:'black',fontSize:22}}>
                                      balance: {item.balance}
                                   </p>
                                </Grid>
                                <Grid style={{margin:10}} xs={3} md={3}>
                                    <form>
                                         <Formik initialValues={{amount:""}} onSubmit={(user)=>{

                                                //Axios.get(`api/bal_update?email=${item.email}&amount=${user.amount}`)
                                                Axios.post('/api/bal_update',{email:item.email,amount:user.amount})
                                                .then((res)=>{
                                                    if(res.data=='SUCCESS'){
                                                        alert('Updated user balance successfully')
                                                    }
                                                })
                                                .catch((err)=>{
                                                    console.log(err.response)
                                                    if(err){
                                                        alert('something went wrong try again.')
                                                    }
                                                })
                                                
                                          }}>{({handleChange,handleSubmit,values})=>(
                                              <Grid container justify='center'>
                                                <Input
        className='app-input'
        style={{color:'white',marginTop:30,width:100}}
        
          id="input-with-icon-adornment"
          color='primary'
          placeholder={item.email}
          autoComplete={false}
          type='number'
          name='amount'
          onChange={handleChange('amount')}
          value={values.amount}
          
          
          
        />
        <Grid style={{backgroundColor:'white',marginTop:30}} container justify='center'>
            <Input type='submit' value='change' onClick={handleSubmit} />
        </Grid>
                                              </Grid>
                                          )}

                                          </Formik>
                                    </form>
                                </Grid>
                           </Grid>
                       </Paper>
                       </Grid>
                   ))}
                </Grid>
            )
        }
    }
    return (
        <div>
            <Grid>
                {main()}
            </Grid>
            
        </div>
    )
}

export default Admin
