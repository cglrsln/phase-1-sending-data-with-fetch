function submitData(name, email) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        //document.body.innerHTML = object[ "id" ]
        document.body.innerHTML = `ID: ${object.id} Name: ${object.name} Email: ${object.email} has been added to the system`
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }