# IMDB-Clone

## Website no longer active since Azure Subscription Expired to view the project clone the repo and run npm install and npm start.

# Description of Project

## Web App

This project is hosted on the following link https://akash-devops.azurewebsites.net/. This Application connects to the OMDB Api which obtains 
Movie and TV Series information. The project was implemented using TypeScript, React, HTML and CSS. Material UI and Axios packages were
utlised in the project.The Application can be used by entering the name of the Movie or TV Series into the Search bar and Pressing Enter.
Read the notes which can be found by clicking the READ THIS button on the app.

## DevOps

Note: I have built 2 pipelines so ignore the newest one and ignore the extra azure-pipelines-1.yml file seen in the repository.

The project is hosted on azure websites by 2 processes which is a build pipeline and release pipeline. The process of building the pipeline is shown
on picture No1, No2, No3 in the Phase 1 Images Folder in my repository. To make the pipeline meet our requirements some edits to the YAML file
is made which can be seen in the azure-pipelines.yml this defines the pipeline. Currently the pipeline only triggers when a change is made to the master 
branch. 

The next process is releasing the pipeline this takes the built 'artifact' from the end of the build pipeline and deploys it. A release is made every 
time a new build is produced by our build pipeline which is seen in picture No4 in the Phase 1 Images Folder in my repository.


