import Fabric from "../../models/Fabric.js"


const fabricController={
    Inward:async(req,res)=>{
        try {
            const {DOC_NO,DATE,JOB_ORDER_NO,RECORD_TYPE,FABRIC_GROUP,COLOR_NAME,SET_NO,DC_DIA,DIA_TYPE,
                PRCESS_NAME,PROCESS_DC_NO,COMPACT_NO,RECD_DC_NO,RECD_DC_DATE,RECD_DC_ROLL,RECD_DC_WGT}=req.body

                const fabric=new Fabric({DOC_NO,DATE,JOB_ORDER_NO,RECORD_TYPE,FABRIC_GROUP,COLOR_NAME,SET_NO,DC_DIA,DIA_TYPE,
                PRCESS_NAME,PROCESS_DC_NO,COMPACT_NO,RECD_DC_NO,RECD_DC_DATE,RECD_DC_ROLL,RECD_DC_WGT})

                fabric.save().then(res.status(200).send("Data is Saved"))
                console.log({fabric})
        } catch (error) {
            console.log("inward error")
        }

    },

    Outward:async(req,res)=>{
        try {
            const{FABRIC_GROUP,COLOR_NAME}=req.body
            const fabric=await Fabric.findOne({FABRIC_GROUP,COLOR_NAME})
            res.status(200).send({fabric})
            console.log(fabric)
        } catch (error) {
            console.log("Error in Outward")
        }
    }
}

export default fabricController