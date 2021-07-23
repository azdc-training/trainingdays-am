(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{354:function(e,t,a){e.exports=a.p+"assets/img/ci-cd-flow.919a7dc6.png"},697:function(e,t,a){e.exports=a.p+"assets/img/ddd-bounded-contexts.93c54f0e.png"},698:function(e,t,a){e.exports=a.p+"assets/img/frontend-apis.595f8d12.png"},699:function(e,t,a){e.exports=a.p+"assets/img/gh-board-overview-05.52d6ff08.png"},700:function(e,t,a){e.exports=a.p+"assets/img/gh-env-dev-config.bbc50dcd.png"},701:function(e,t,a){e.exports=a.p+"assets/img/gh-env-test-config.c3faedd0.png"},702:function(e,t,a){e.exports=a.p+"assets/img/common-bicep-module.033ef7b1.png"},703:function(e,t,a){e.exports=a.p+"assets/img/gh-action-status-checks.dca6c798.png"},704:function(e,t,a){e.exports=a.p+"assets/img/gh-action-status-successful.552797f3.png"},705:function(e,t,a){e.exports=a.p+"assets/img/gh-day4-common-triggered.e56aece2.png"},706:function(e,t,a){e.exports=a.p+"assets/img/gh-day4-common-details.3ded6489.png"},707:function(e,t,a){e.exports=a.p+"assets/img/gh-day4-common-waiting.63b3fc80.png"},708:function(e,t,a){e.exports=a.p+"assets/img/gh-day4-common-approve.6d70dbf4.png"},709:function(e,t,a){e.exports=a.p+"assets/img/gh-board-overview-06.43ad71b9.png"},862:function(e,t,a){"use strict";a.r(t);var n=a(25),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"challenge-05-create-a-ci-cd-workflow-to-deploy-the-shared-azure-resources-of-the-scm-sample-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#challenge-05-create-a-ci-cd-workflow-to-deploy-the-shared-azure-resources-of-the-scm-sample-application"}},[e._v("#")]),e._v(" Challenge 05: Create a CI/CD workflow to deploy the shared Azure resources of the SCM sample application")]),e._v(" "),n("p",[e._v("⏲️ "),n("em",[e._v("Est. time to complete: 30 min.")]),e._v(" ⏲️")]),e._v(" "),n("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),n("p",[e._v("In this challenge you will learn how to:")]),e._v(" "),n("ul",[n("li",[e._v("Create a GitHub CI/CD workflow to deploy shared Azure resources of the\nSCM sample application")]),e._v(" "),n("li",[e._v("Add approval reviewer to a pull request")]),e._v(" "),n("li",[e._v("See a pull requests status checks in action")]),e._v(" "),n("li",[e._v("Deploy changes to the master branch to a development environment")]),e._v(" "),n("li",[e._v("Approve deployment requests to a Testing environment")])]),e._v(" "),n("h2",{attrs:{id:"table-of-content"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-of-content"}},[e._v("#")]),e._v(" Table of content")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"#get-started"}},[e._v("Get started")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#goal"}},[e._v("Goal")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#plan-your-work"}},[e._v("Plan your work")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#create-dev-and-test-environments"}},[e._v("Create Dev and Test environments")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#create-a-service-principal-and-store-the-secret"}},[e._v("Create a service principal and store the secret")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#activate-the-cicd-workflow"}},[e._v("Activate the CI/CD workflow")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#summary"}},[e._v("Summary")])])]),e._v(" "),n("h2",{attrs:{id:"get-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[e._v("#")]),e._v(" Get started")]),e._v(" "),n("p",[e._v("Now it's time to come back to the Azure Developer College's sample application.\nWe want to introduce a professional CI/CD workflow to continuously and constantly\ndeploy changes and features to multiple environments. A best practice is to\nfirst deploy changes in a separate environment before those changes eventually\ngo live. We can look for potential errors and ensure the quality of our\napplication. Such an environment is usually referred to as the "),n("em",[e._v("testing")]),e._v(" stage.\nBut that is not enough, because it also makes sense to continuously provide the\ncurrent development status in an environment during the development period. This\ngives us the opportunity to request feedback from the product owners within a\nsprint. Such an environment is called the "),n("em",[e._v("development")]),e._v(" stage.")]),e._v(" "),n("p",[e._v("In this challenge we want to start preparing for deployment in two environments.\nAfter changes were pushed to the master branch we deploy these changes to the\ndevelopment environment. A deployment to the testing environment is only\ntriggered, after a manual approval. In addition, we want to check within a pull\nrequest whether all application components can also be built. These are the\nstatus checks of a pull request that we addressed in the last challenge.")]),e._v(" "),n("p",[e._v("The following graphic illustrates the workflow:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(354),alt:"CI/CD Workflow"}})]),e._v(" "),n("p",[e._v("The sample application is composed of various micro-services. Each service\nbelongs to a bounded context of the SCM domain. A bounded context defines its\nown domain model and it comprises the business logic for a specific technical\narea of the application. The SCM sample application consist of the following\nbounded contexts:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(697),alt:"Domain Driven Design bounded contexts"}})]),e._v(" "),n("p",[e._v("Each context provides an API which the frontend accesses and presents the domain\nto the user:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(698),alt:"Frontend accesses APIs"}})]),e._v(" "),n("p",[e._v("A bounded context should be the responsibility of a single team. However, a team\ncan also be responsible for several bounded contexts, but it is not recommended\nthat several teams work on one bounded context.")]),e._v(" "),n("p",[e._v("What does this mean for our CI/CD workflow?")]),e._v(" "),n("p",[e._v("Regardless of the teams, we should be able to roll out each bounded context\nindependently. This way we reduce the time for deployment, as the complete\napplication does not have to be deployed. We can implement independent release\ncycles and roll out targeted features and fixes. However, this approach also\nsupports the development of an application by several teams.")]),e._v(" "),n("p",[e._v("Later in the day we will create the following CI/CD workflows to deploy to a\ndevelopment and testing environment:")]),e._v(" "),n("ul",[n("li",[e._v("scm-contactsapi")]),e._v(" "),n("li",[e._v("scm-resourcesapi")]),e._v(" "),n("li",[e._v("scm-searchapi")]),e._v(" "),n("li",[e._v("scm-visitreportapi")]),e._v(" "),n("li",[e._v("scm-frontend")])]),e._v(" "),n("p",[e._v("In the SCM sample application's architecture no service within a bounded context\ncommunicates directly with services from another bounded context. Instead\nchanges to a domain object within a bounded context are published through\nevents, which describe the changes. Technically, a message bus is used to\nnotify other bounded contexts about the changes. With this approach we can\ndecouple the bounded contexts. Decoupling increases the availability of our\napplication, because when a request is made to the API, not all services have to\nbe addressed. A bounded context is informed of changes via the message bus.\nThese changes can then be processed asynchronously and the own domain model can\nbe updated. This approach is also used within a bounded context. The Resource\nContext for example, stores uploaded images in an Azure blob first and uses a\nmessage queue to notify the image resizer that a new image is available. The\nimage resizer loads the image asynchronously in the background and creates a\nthumbnail of the image.")]),e._v(" "),n("h2",{attrs:{id:"goal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[e._v("#")]),e._v(" Goal")]),e._v(" "),n("p",[e._v("The goal of this challenge is to create a CI/CD workflow for shared Azure\nresources. Before we can deploy all other services we need to create a set of\nAzure resources, which are used by all services. We will create the necessary\nGitHub Actions workflow. Don't worry, the workflow is already created, but we\nneed to take a few steps to activate it. This will also give us the opportunity\nto introduce GitHub environments and understand how a pull request workflow\nworks, including status checks and reviewers. At the end of this challenge we\nwill have created one Azure resource group for each environment (Dev, Test).\nEach resource group contains the shared components:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Azure ApplicationInsights")]),e._v(", to get a continuous monitoring of the\napplication")]),e._v(" "),n("li",[n("strong",[e._v("Azure ServiceBus")]),e._v(", used to transport events from one bounded context to\nanother and for events within a bounded context")]),e._v(" "),n("li",[n("strong",[e._v("AppServicePlan Windows")]),e._v(", for Windows based workloads")]),e._v(" "),n("li",[n("strong",[e._v("AppServicePlan Linux")]),e._v(", for Linux based workloads")]),e._v(" "),n("li",[n("strong",[e._v("Consumption based AppServicePlan Windows")]),e._v(", for Windows based Azure\nFunctions")]),e._v(" "),n("li",[n("strong",[e._v("Storage Account")]),e._v(", needed for Azure Functions")]),e._v(" "),n("li",[n("strong",[e._v("Cosmos DB Account")]),e._v(", account for Cosmos DB")])]),e._v(" "),n("h2",{attrs:{id:"plan-your-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plan-your-work"}},[e._v("#")]),e._v(" Plan your work")]),e._v(" "),n("p",[e._v("First we want to reflect our work for this challenge on the project board. We\nhave already created a "),n("em",[e._v("note")]),e._v(" on our project board, which says:")]),e._v(" "),n("blockquote",[n("p",[e._v("Deploy the sample application")])]),e._v(" "),n("p",[e._v("To describe the outstanding work for this challenge, we create the following\nissue in the imported trainingdays repository, set the label "),n("code",[e._v("azdc-challenge")]),e._v("\nand link it to the "),n("em",[e._v("note")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language-Text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Deploy SCM shared Azure resources\n\nPrepare GitHub Actions workflow to deploy shared Azure resources to your Azure\nsubscription.\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("📝 We have already seen how to link an issue to a note in\n"),n("RouterLink",{attrs:{to:"/day4/challenges/01-challenge-boards.html#working-with-cards"}},[e._v("challenge-boards")])],1)]),e._v(" "),n("p",[e._v("Now drag and drop the note to the "),n("em",[e._v("In progess")]),e._v(" column.")]),e._v(" "),n("p",[e._v("Your board should now look like this:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(699),alt:"GitHub board overview 05"}})]),e._v(" "),n("h2",{attrs:{id:"create-dev-and-test-environments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-dev-and-test-environments"}},[e._v("#")]),e._v(" Create Dev and Test environments")]),e._v(" "),n("p",[e._v("Now it's time to prepare GitHub environments to deploy the sample application to\na "),n("em",[e._v("Dev")]),e._v(" and "),n("em",[e._v("Test")]),e._v(" stage. A GitHub environment can be configured with\nprotection rules and secrets. A workflow job can reference environments to use\nenvironment's protection rules and secrets.")]),e._v(" "),n("h3",{attrs:{id:"dev-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dev-environment"}},[e._v("#")]),e._v(" Dev environment")]),e._v(" "),n("p",[e._v("Let us first create the environment for the Development stage.")]),e._v(" "),n("p",[e._v("Navigate to the imported "),n("em",[e._v("trainigdays")]),e._v(" repository in your organization and go to\nthe repository's settings. Open the "),n("em",[e._v("Environments")]),e._v(" view and create the\nenvironment "),n("code",[e._v("day4-scm-dev")]),e._v(". As we only want to deploy the master branch to that\nenvironment, we limit what branches can deploy to that environment.")]),e._v(" "),n("p",[e._v("Select the "),n("code",[e._v("Deployment branches")]),e._v(" dropdown and choose the "),n("code",[e._v("Selected branches")]),e._v("\noption. Add the "),n("code",[e._v("master")]),e._v(" branch as allowed branch.")]),e._v(" "),n("p",[e._v("We need to add a secret, because we will create an Azure SQL Database and need\nto provide an initial password, which we can securely store as an environment\nsecret and access it later in the GitHub Actions workflow.")]),e._v(" "),n("p",[e._v("Use the "),n("code",[e._v("Add Secret")]),e._v(" button to add a new secret named "),n("code",[e._v("SQL_PASSSWORD")]),e._v(".")]),e._v(" "),n("p",[e._v("You can generate a strong password by using the following command:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("pwgen -n "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" -y\n")])])]),n("p",[n("img",{attrs:{src:a(700),alt:"GitHub Dev environment config"}})]),e._v(" "),n("h3",{attrs:{id:"test-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-environment"}},[e._v("#")]),e._v(" Test environment")]),e._v(" "),n("p",[e._v("Create another environment for the Test stage and name it "),n("code",[e._v("day4-scm-test")]),e._v(". As we\nwant a manual approval, before a deployment is executed to that environment, we\nset "),n("em",[e._v("Environment protection rules")]),e._v(". Activate "),n("code",[e._v("Required reviewers")]),e._v(" and add a\nreviewer.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("📝 Add yourself as a Reviewer, otherwise you will have to wait until the\nselected reviewer approves the deployment request.")])]),e._v(" "),n("p",[e._v("Make sure to again configure the selected branches and the "),n("code",[e._v("SQL_PASSWORD")]),e._v("\nenvironment secret. The password should differ for each environment.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(701),alt:"GitHub test environment config"}})]),e._v(" "),n("h2",{attrs:{id:"create-a-service-principal-and-store-the-secret"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-a-service-principal-and-store-the-secret"}},[e._v("#")]),e._v(" Create a service principal and store the secret")]),e._v(" "),n("p",[e._v("To allow GitHub to interact with our Azure Subscription we need to create a\nService principal in our Azure Active Directory. We have already learned in\n"),n("RouterLink",{attrs:{to:"/day4/challenges/03-challenge-bicep.html#programmatic-access-to-azure"}},[e._v("challenge 3")]),e._v(" how we can\nprogrammatically access an Azure subscription.")],1),e._v(" "),n("p",[e._v("If you don't remember your Service Principal's credentials, just create a new\none and copy the credentials from the output of the following command:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change the name and use your subscription-id to create a Service Principal.")]),e._v("\naz ad sp create-for-rbac --name "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{name}-github-actions-sp"')]),e._v(" --sdk-auth --role contributor --scopes /subscriptions/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("subscription-id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[e._v("Now we need to store the Service Principal's credentials. Navigate to the\n"),n("em",[e._v("trainingdays")]),e._v(" repository "),n("code",[e._v("Settings > Secrets")]),e._v("page and add a new repository\nsecret named "),n("code",[e._v("AZURE_CREDENTIALS")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"activate-the-ci-cd-workflow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#activate-the-ci-cd-workflow"}},[e._v("#")]),e._v(" Activate the CI/CD workflow")]),e._v(" "),n("p",[e._v("Now we have everything prepared to active the CI/CD workflow. First, clone the\nrepository, create a new branch named "),n("code",[e._v("cicd/common")]),e._v("and check it out:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your repository"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch cicd/common\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout cicd/common\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b cicd/common\n")])])]),n("p",[e._v("There is already a Visual Studio Code workspace prepared which we can simple\nopen with:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" day4\ncode ./day4.code-workspace\n")])])]),n("p",[e._v("All known application components are already available in this workspace. In\naddition, we see two more directories:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("workflows")]),e._v(", here we find all prepared GitHub Actions workflow for the Azure\nDeveloper College")]),e._v(" "),n("li",[n("strong",[e._v("infrastructure")]),e._v(", here we find all bicep modules to deploy the needed Azure\ninfrastructure for all components")])]),e._v(" "),n("h3",{attrs:{id:"infrastructure-as-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-as-code"}},[e._v("#")]),e._v(" Infrastructure as code")]),e._v(" "),n("p",[e._v("Take your time and have a look at the structure of the bicep files. Under the\ndirectory "),n("code",[e._v("infrastructure")]),e._v(" we can find all bounded contexts of the sample\napplication:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("common")]),e._v(" > the shared Azure resource")]),e._v(" "),n("li",[n("strong",[e._v("contacts")]),e._v(" > Contact Context")]),e._v(" "),n("li",[n("strong",[e._v("resources")]),e._v(" > Resource Context")]),e._v(" "),n("li",[n("strong",[e._v("search")]),e._v(" > Search Context")]),e._v(" "),n("li",[n("strong",[e._v("visitreports")]),e._v(" > VisitREport Context")]),e._v(" "),n("li",[n("strong",[e._v("frontend")]),e._v(" > Frontend")])]),e._v(" "),n("p",[e._v("Each bounded context describes its own infrastructure using code. Azure Bicep\nmodules are used to make the Bicep code more maintainable.")]),e._v(" "),n("p",[e._v("In this challenge we will deploy the shared Azure resources used by all bounded\ncontexts. You can find the needed Bicep code in the workspace folder\n"),n("code",[e._v("infrastructure/common")]),e._v(". There is one main Bicep module "),n("code",[e._v("commonmain.bicep")]),e._v(" which\nreferences other Bicep modules to describe the infrastructure.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(702),alt:"Common Bicep modules"}})]),e._v(" "),n("p",[e._v("After the shared Azure resources are deployed, each bounded context references\nthese resources using the Azure naming convention and the Bicep "),n("code",[e._v("existing")]),e._v("\nkeyword. You can find the naming conventions\n"),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Here is an example:")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("ContactsAPI")]),e._v(" is deployed to an Azure WebApp, which needs an AppService\nPlan. The AppService Plan is deployed as a shared Azure resource, which means\nthat the plan is used by multiple bounded contexts (remember, three plans are\nprovided, as described above). To reference the plan in the "),n("code",[e._v("Contact Context")]),e._v("\nbicep files we use the "),n("code",[e._v("existing")]),e._v(" keyword and the Azure naming conventions:")]),e._v(" "),n("div",{staticClass:"language-bicep extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// naming conventions helps us to reference a resource by name\n// the resource group's id is joined as a unique string to make the resource name unique\nvar planWindowsName = 'plan-scm-win-${env}-${uniqueString(resourceGroup().id)}'\n\n// we can reference existing Azure resources by their type and name with the `existing` keyword ...\nresource appplan 'Microsoft.Web/serverfarms@2020-12-01' existing = {\n  name: planWindowsName\n}\n\n// .. and use the symbolic name to access properties\nresource webapp 'Microsoft.Web/sites@2020-12-01' = {\n  name: webAppName\n  location: location\n  tags: resourceTag\n  properties: {\n    // use the plan's symbolic name\n    serverFarmId: appplan.id\n    ...\n")])])]),n("p",[e._v("You can find the code for the "),n("code",[e._v("Contact Context")]),e._v("in the workspace folder\n"),n("code",[e._v("infrastructure/contacts")]),e._v(". Again, there is a main module that references other\nmodules to produce maintainable code.")]),e._v(" "),n("h3",{attrs:{id:"github-actions-workflows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-workflows"}},[e._v("#")]),e._v(" GitHub Actions workflows")]),e._v(" "),n("p",[e._v("Now it's time to have a look at the already prepared GitHub Actions workflows\nfor Day4. You can find all workflows in the workspace folder "),n("code",[e._v("workflows")]),e._v(". Today\nwe focus on all workflows with the prefix "),n("code",[e._v("day4-")]),e._v(". First, we will prepare the\nworkflow for the shared Azure resources. Open the workflow\n"),n("code",[e._v("workflows/day4-scm-common.yml")]),e._v(". This workflow, like all others, is triggered\nwhen a pull request is opened or changes were pushed to the master branch. In\naddition, filters are applied to individual files:")]),e._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" day4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("scm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("common\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" master\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("paths")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" day4/apps/infrastructure/bicep/common/"),n("span",{pre:!0,attrs:{class:"token important"}},[e._v("**")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" .github/workflows/day4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("scm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("common.yml\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pull_request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("branches")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" master\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("paths")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" day4/apps/infrastructure/bicep/common/"),n("span",{pre:!0,attrs:{class:"token important"}},[e._v("**")]),e._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" .github/workflows/day4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("scm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("common.yml\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("workflow_dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n")])])]),n("p",[e._v("With the trigger "),n("code",[e._v("workflow_dispatch")]),e._v("it is possible to trigger the workflow\nmanually.")]),e._v(" "),n("p",[e._v("The workflows consists of three jobs:")]),e._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# to build all needed artefacts")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("deploy-to-dev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" day4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("scm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dev "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# deploy to dev environment")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("delpoy-to-test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" day4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("scm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("test "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# deploy to test environment")]),e._v("\n")])])]),n("p",[e._v("As you see, first all artifacts, needed for the deployment, are created and\nvalidated. With the "),n("code",[e._v("build")]),e._v("job we can make sure that everything can be created,\neven if we only try to transpile Bicep code to Azure ARM templates.")]),e._v(" "),n("p",[e._v("If everything can be created the next job "),n("code",[e._v("deploy-to-dev")]),e._v("is executed, but only\nif the trigger event is of type "),n("code",[e._v("push")]),e._v("or "),n("code",[e._v("workflow_dispatch")]),e._v(". This means, that\nthe deployment will only be executed, if changes were pushed to the master\nbranch or the workflows is triggered manually. Within a pull request, only the\nstep "),n("code",[e._v("build")]),e._v(" is executed to get immediately feedback if everything can be built\nor not. If the build fails, the status check of a pull request would also fail\nand the pull request cannot be merged.")]),e._v(" "),n("p",[e._v("That is exactly what we want to achieve. Remember the goal of this challenge:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(354),alt:"CI/CD Workflow"}})]),e._v(" "),n("h3",{attrs:{id:"prepare-the-workflow-and-create-a-pull-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-workflow-and-create-a-pull-request"}},[e._v("#")]),e._v(" Prepare the workflow and create a pull request")]),e._v(" "),n("p",[e._v("Now it's time to prepare the workflow which rolls out the shared Azure resources\nfor the Azure Developer College's sample application. We have already cloned\nthe repository and created a new branch "),n("code",[e._v("cicd/common")]),e._v(".")]),e._v(" "),n("p",[e._v("Open the workflow "),n("code",[e._v("day4-scm-common.yml")]),e._v(" and replace the organization name in\neach job condition with your organization's name:")]),e._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" github.repository == '<your organisation name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/trainingdays'\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("deploy-to-dev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" (github.repository == '<your organisation name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/trainingdays') "),n("span",{pre:!0,attrs:{class:"token important"}},[e._v("&&")]),e._v(" ((github.event_name == 'push') "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),e._v(" (github.event_name == 'workflow_dispatch'))\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("delpoy-to-test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" (github.repository == '<your organisation name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/trainingdays') "),n("span",{pre:!0,attrs:{class:"token important"}},[e._v("&&")]),e._v(" ((github.event_name == 'push') "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("|")]),e._v(" (github.event_name == 'workflow_dispatch'))\n")])])]),n("p",[e._v("Save the file, commit your changes and push the branch to the remote repository:")]),e._v(" "),n("div",{staticClass:"language-Shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"changed org name in common workflow"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --set-upstream origin cicd/common\n")])])]),n("p",[e._v("Now, create a pull request to merge the branch "),n("code",[e._v("cicd/common")]),e._v(" into the "),n("code",[e._v("master")]),e._v("\nbranch. Set "),n("code",[e._v("Deploy shared Azure resources")]),e._v(" as title and close the issue\n"),n("code",[e._v("Deploy SCM shared Azure resources")]),e._v(" using the keyword "),n("code",[e._v("closes #<issue id>")]),e._v(" in\nthe pull requests body.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("📝 If you want, you can add a reviewer. However, since you as the Administrator\nare excluded from the branch rules, you can merge the pull request without a\nreview approval.")])]),e._v(" "),n("p",[e._v("Wait a few seconds, until the status checks are triggered:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(703),alt:"GitHub status checks"}})]),e._v(" "),n("p",[e._v("If everything is configured correctly, the build job of the workflow should be\nsuccessful:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(704),alt:"GitHub status check successful"}})]),e._v(" "),n("p",[e._v("Now merge the pull request and navigate to your repository' action page. You\nshould see that the "),n("code",[e._v("day4-scm-common")]),e._v(" workflow is triggered after a few seconds.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(705),alt:"GitHub day4-scm-common triggered"}})]),e._v(" "),n("p",[e._v("In the details page of the running workflow you see all jobs.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(706),alt:"GitHub Day4 common workflow details"}})]),e._v(" "),n("p",[e._v("After the "),n("code",[e._v("dev")]),e._v(" environment is deployed, go to the Azure portal an checkout the\nnewly created resource group and resources. The workflow is now in the\n"),n("code",[e._v("waiting")]),e._v("state, because a reviewer must approve the deployment to the "),n("code",[e._v("test")]),e._v("\nenvironment:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(707),alt:"GitHub Day4 common waiting"}})]),e._v(" "),n("p",[e._v("Review the pending deployment, leave a comment and "),n("code",[e._v("Approve and deploy")]),e._v(":")]),e._v(" "),n("p",[n("img",{attrs:{src:a(708),alt:"GitHUb day4 approve"}})]),e._v(" "),n("p",[e._v("Now the test environment will be deployed. After the deployment is finished, we\nhave another resource group with all shared Azure resources in the test\nenvironment.")]),e._v(" "),n("p",[e._v("Take your time and investigate the created resources.")]),e._v(" "),n("p",[e._v("Check your Project Board, it should look something like this:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(709),alt:"GitHub Board overview 06"}})]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v("We have seen how to create a CI/CD workflow where a reviewer has to approve a\ndeployment to the test environment. This workflow can also be used to validate\nall artifacts within a pull request. This helps us to avoid build breaks. Of\ncourse, there would be many other scenarios that can be implemented with the\nGitHub Actions workflow. Maybe it is a good idea to deploy directly to a\ndevelopment environment within a pull request to even validate the deployment\nbefore pushing changes to the master branch.")]),e._v(" "),n("p",[e._v("We have so far only provided the shared Azure resources for the Azure Developer\nCollege's sample application. There is still some work to be done. We'll move\nstraight into the breakout session where we'll deploy all the rest of the\nbounded contexts. We proceed step by step in the same way as in this Challenge:")]),e._v(" "),n("ul",[n("li",[e._v("create an issue to plan and track your work")]),e._v(" "),n("li",[e._v("pull changes from the master branch")]),e._v(" "),n("li",[e._v("create a feature branch "),n("code",[e._v("cicd/all")])]),e._v(" "),n("li",[e._v("prepare all workflows")]),e._v(" "),n("li",[e._v("commit and push changes")]),e._v(" "),n("li",[e._v("create a pull request")]),e._v(" "),n("li",[e._v("merge the pull request")]),e._v(" "),n("li",[e._v("wait until everything is deployed")])]),e._v(" "),n("p",[n("a",{attrs:{href:"./04-challenge-azdc-repo"}},[e._v("◀ Previous challenge")]),e._v(" | "),n("RouterLink",{attrs:{to:"/day4/"}},[e._v("🔼 Day 4")]),e._v(" | "),n("RouterLink",{attrs:{to:"/day4/challenges/06-breakout.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=s.exports}}]);