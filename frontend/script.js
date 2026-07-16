document.addEventListener("DOMContentLoaded",function(){

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");


    function validateUsername(username){
        if(username.trim()==""){
            alert("username can't be blank");
            return false;
        }
        // regex expression
        const regex = /^[a-zA-Z0-9_-]{1,30}$/;  
        return regex.test(username);

    }

    async function fetchUserDetails(username) {
        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            

            

            const response = await fetch(
                "http://localhost:3000/leetcode",
                {
                    method:"POST",

                    headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                username:username
            })
    }
);




            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData) ;

            displayUserData(parsedData);

        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
        
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData){
        const totalQ=parsedData.data.allQuestionsCount[0].count;
        const totalEasyQ=parsedData.data.allQuestionsCount[1].count;
        const totalMediumQ=parsedData.data.allQuestionsCount[2].count;
        const totalHardQ=parsedData.data.allQuestionsCount[3].count;
        

        const solvedTotalQ=parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQ=parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQ=parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQ=parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQ, totalEasyQ, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQ, totalMediumQ, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQ, totalHardQ, hardLabel, hardProgressCircle); 

        const cardsData = [
            {label: "Ranking", value:parsedData.data.matchedUser.profile.ranking},
            {label: "Reputation", value:parsedData.data.matchedUser.profile.reputation},
            {label: "Star Rating", value:parsedData.data.matchedUser.profile.starRating },
            {label: "About", value:parsedData.data.matchedUser.profile.aboutMe },
        ];

        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")
    }

    searchButton.addEventListener('click',function(){
        const username=usernameInput.value;
        console.log(username);
        if(validateUsername(username)){
            //we fetch data using api
            fetchUserDetails(username);
        }
    })

})