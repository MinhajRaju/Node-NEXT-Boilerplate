import Demo from '../Model/Demo.js'


export const HomePage = async (req , res) =>{
    const DemoData = await Demo.findAll()
    res.status(200).json(DemoData)
}