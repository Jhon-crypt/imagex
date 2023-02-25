import React from 'react'
import { useState } from 'react'
import { Bars } from  'react-loader-spinner'


function GenerateImage (){

    const [prompt, setPrompt] = useState('');

    const [imageUrl, setImageUrl] = useState('');

    const [imageStatus, setImageStatus] = useState(false);

    const [errorStatus, setErrorStatus] = useState('');

    const [loading, setLoading] = useState(false)


    
    const handleSubmit = async (event : any) => {

        setLoading(true)

        event.preventDefault();

        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPEN_API,
        });

        const openai = new OpenAIApi(configuration);

        try{

            const response = await openai.createImage({
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            });
            setImageUrl(response.data.data[0].url)

            if(response.data.data[0].url){

                setImageStatus(true)

                setLoading(false)
    
            }

        }catch (error : any) {
            if (error.response) {
                setLoading(false)
                console.log(error.response.data);
                setErrorStatus("Your prompt could not be created as a result of our safety in text that is not allowed by our safety system")
            } 
        }
    

    }

    return (

        <>
            {loading ? 
                (
                    <div className="mx-auto" style={{ "width" : "150px" }}>
                    <Bars 
                        height="80"
                        width="80"
                        color="#74D8FA"
                        ariaLabel="bars-loading"
                        visible={true}
                        wrapperStyle={{}}
                    />
                    </div>
                ):(

                    <div className="px-4 pt-5 my-5 text-center text-light">
                        <h1 className="display-4 fw-bold">Generate Image</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="lead mb-4 text-light">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" 
                                        placeholder="What do you wanna generate" value={prompt} onChange={(event) => setPrompt(event.target.value)}/>
                                        <button className="btn btn-md" type="submit" 
                                        style={{ "backgroundColor" : "#74D8FA", "color" : 
                                        "#020410" }}>
                                            <b>Generate</b>
                                        </button>
                                    </div>
                                    <div>{imageStatus ? 
                                        <>
                                            <p>Chill for some seconds while the image loads</p> 

                                            <img src={imageUrl} className="rounded mb-2" alt="generated" 
                                            style={{"objectFit":"cover","border":"1px solid black","height":"300px","borderRadius":"20px",
                                            "width":"400px"}}/>

                                        </>  
                                        : 
                                        <p>{errorStatus}</p>}
                                    </div>
                                </form>
                            </p>
                        </div>
    
                    </div>

                )
            }
        </>

    )

}

export default GenerateImage
