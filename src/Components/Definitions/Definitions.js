import React from 'react'
import './Definitions.css'
const Definitions = ({word , meanings , category}) => {
 



  return (
    <div className='meanings' style ={{marginTop:'13px'}}>
    
    {
      meanings[0] && word && category === "en"    &&
      (
        <audio style ={{backgroundColor:'#fff', border:'2px solid red' , borderRadius:10 , width:'100%' }}  controls src={meanings[0] && meanings[0].phonetics[0] != null && meanings[0].phonetics[0].audio } >
        {meanings[0] && meanings[0].phonetics[0] != null && meanings[0].phonetics[0].audio}
        </audio>
      ) 
    }

    
   

    {



      word  === ""?
      (<span className = "subTitle">Start by Typing a word in a search </span>)
      :
      (
        meanings.map((mean) => {

          return (
            <>
         


            {
             
              


              mean.meanings.map((item)=>{
                return(
                  <>
                  {
                    item.definitions.map((def)=>{
                      return(
                   <div className = "singleMean" 

                       style={{backgroundColor:'white',color:'black' }}>
                        
                       <span   >
                       <span style ={{color :'black' , fontWeight:'bolder' }}>Meaning  </span>
                        : {def.definition}
                       </span>
                       {                        
                         def.example && (
                           <span>
                           
                           <b>Example : </b>
                           {def.example}
                           </span>
                           )
                          }   
                          
                          
                          {
                            def.synonyms && 
                            (
                              <span>
                              <b>synonyms : </b>
                              {
                                def.synonyms.map((s)=> `${s} ,`)  
                           }
                           
                           </span>
                           )
                          }
                          
                          <hr style ={{height:'3px', marginTop:'5px' ,backgroundColor:'grey'}} />
                          </div>
                          )
                        }
                        )
                      }
                      </>
                )
              })

            }
            </>
          )
        }
        )



      )
      

    }
    </div>
  )
}

export default Definitions
