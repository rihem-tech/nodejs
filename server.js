const http=require('http') //importer le module http qui permet de créer le serveur (lezem nhotouh le 
                           //module heka fi west constante ou variable(melmosta7ssen nhotou const bech mayetbadelch w ne7miweh mel les pirates))


 const server= http.createServer((req,res)=>{
  res.statusCode=200   // status code howa l'état du response (ou bien request)
                     // exemple: code 404: error
                     // code 200: response 7altou 100% s7i7a 
  res.setHeader('content-type', 'text/html')        //content type, dans notre cas, 
//l content type est text/html: naw3 l file li bech nraj3ou 
    //res.write(req.url) // kif nekteb req.url fi west l write
                       // y'affichili / welli baadha(ken kteb haja baad 3000/): chnou tlba meni le client
                      // najmou naamlou condition:
                        if (req.url=='/home'){
                          res.statusCode=200
                          res.write('welcome from home')
                        } else if(req.url=='/gg'){
                          res.statusCode=200
                          res.write('welcome from gg')
                        }else {
                          res.statusCode=404
                          res.write('not found')

                        }
                                                                       
     // réponse avec affichage du message "welcome" : wa9t yettassel
    // bik wehed mel localhost:3000 , traja3lou comme response message welcome
    res.end() // el end() he4i 3ibara break lel boucle infinie bech yetbaath l response w neb9awech de5lin fel boucle infinie
        //console.log (res) // pour ecriture dans le console de la réponse res
// res: response, req: request::: 2 objets
// ema manajemch naamel haka  res.end('hhhhh')
                           //res.end('hhhhh2') hekom zouz yraj3ouli ken hhhhhh kahaw khater c bon l response tbaathet. alors l end() nestaamelha mara bark fel code
 })
    // on va créer notre serveur avec la méthode 
                                      //createserver qui existe dans l'objet nommé http 
                                      //w n'affectiweh l constante samineha server                     


server.listen(3000,()=>{console.log('server running') }) 
// console.log() lahna staamelneha bech naffichiw message server running aal cmd
// donner un port à notre serveur(objet howa server,
                    // listen heya la méthode qui permet l'écoute sur le port 3000)
                    // NB: ce port bech nestaamlouh 5aterna ne5dmou aala 
                    //localhost ema bech yetnaha wa9t taamel déployement aala shared host

// script li fou9 yesnaalek serveur w kif tetassel bih yrajjalek un message "welcome"
