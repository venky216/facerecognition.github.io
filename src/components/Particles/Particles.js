import React from 'react'
import Particles from 'react-particles-js'
import './Particles.css'
const Particle = ()=>{
    return(
        <div className="particles">
             <Particles  
              params={{
            		particles: {
            			number:{
                            value:30,
                            density:{
                                enable:true,
                                value_area:800
                            }
                        }
            		}
            	}}
            
            />
        </div>
    )
}
export default Particle