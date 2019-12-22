$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;
  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }
  // Getting jQuery references to the post body, title, form, and category select
  var firstName = $("#first_name");
  var lastName = $("#last_name");
  var email = $("#email");
  // Adding an event listener for when the form is submitted
  $("#client-submit").on("click", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!lastName.val().trim() || !firstName.val().trim() || !email.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      email: email.val()
    };

    console.log(newPost);

    if (updating) {
      newPost.id = postId;
    updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    $.post("/api/client", Post, function () {
      window.location.href = "/payment";
      // console.log(data);
      console.log(Post, "This is Post")

    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      type: "POST",
      url: "/api/client",
      data: post
    })
      .then(function () {
        console.log(post + "this is data")
        window.location.href = "/payment";
      })
  }
});
