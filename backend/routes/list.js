import express from "express";


export default function (connection) {
const router=express.Router();

router.get("/list", (req, res) => {
        const query = `
        SELECT * FROM henrijorcom
        `;
    connection.query(query,(err,result) => {
    if (err) {
        console.error("DB fetch error:",err);
        return res.status(500).json({message:"Error getting data"})
    }
    const formattedResult = result.map(row => ({
  ...row,
  timeline:row.timeline ? JSON.parse(row.timeline) : null,
  techstack:row.techstack ? JSON.parse(row.techstack) : "",
  links:row.links ? JSON.parse(row.links) : ""
}));

    res.json({data:formattedResult});
    });
});
return router;
}