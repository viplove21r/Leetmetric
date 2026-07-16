const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/leetcode", async (req, res) => {

    const username = req.body.username;


    const query = `
query userProfile($username: String!) {

  matchedUser(username: $username) {

    username

    profile {
      ranking
      reputation
      starRating
      realName
      aboutMe
      userAvatar
      school
      countryName
      company
      jobTitle
      skillTags
    }

    submitStats {

      acSubmissionNum {
        difficulty
        count
      }

    }
}
  

  allQuestionsCount {
    difficulty
    count
  }
}
`;

    try {

        const response = await axios.post(
            "https://leetcode.com/graphql/",
            {
                query: query,
                variables:{
                    username: username
                }
            },
            {
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );


        res.json(response.data);


    } catch(error){

        console.log(error.message);

        res.status(500).json({
            error:"Unable to fetch data"
        });

    }

});


app.listen(3000,()=>{
    console.log("Server running on port 3000");
});