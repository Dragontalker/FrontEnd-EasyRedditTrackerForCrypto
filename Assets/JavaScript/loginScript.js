let users = [
    {
      userName: "Shiva",
      password: 1111,
      saved: [],
    },
    {
      userName: "Sam",
      password: 2222,
      saved: [],
    },
    {
      userName: "Max",
      password: 3333,
      saved: [],
    },
    {
      userName: "Richard",
      password: 4444,
      saved: [],
    },
    {
      userName: "Giovanni",
      password: 5555,
      saved: [],
    },
  ];
  //points to the obj
  let onlineNow;
  
  class User {
    constructor(username, password, saved) {
      this.userName = username;
      this.password = password;
      this.saved = [];
    }
  }
  
  function loadPage() {
    if (localStorage.users) {
      users = JSON.parse(localStorage.getItem("users"));
      console.log(users);
    } else localStorage.setItem("users", JSON.stringify(users));
  
    if (localStorage.onlineNow) {
      onlineNow = JSON.parse(localStorage.getItem("onlineNow"));
      console.log(onlineNow.userName);
      $("#userName").html(onlineNow.userName);
    }
  }
  ////STORE USER
  function storeUser(name, password) {
    const newOne = new User(name, password);
    users.push(newOne);
    localStorage.setItem("users", JSON.stringify(users));
  }
  ////CREATE NEW USER
  function newUser(e) {
    e.preventDefault();
    const name = $(".createUsername").val();
    const password = $(".createPassword").val();
    console.log(name, password);
    if (name && password) {
      let check = checkUserName(name);
      if (check) {
        alert("UserName already taken!");
        return;
      } else {
        storeUser(name, password);
        clearFIelds();
        closeModal();
      }
    } else alert("Please insert a valid input");
  }
  //////LOGIN LOGIC
  function login(e) {
    e.preventDefault();
    let username = $(".username").val();
    let password = $(".password").val();
    [currentUser] = users.filter(
      (el) =>
        el.password == password &&
        el.userName.toLowerCase() === username.toLowerCase()
    );
    if (currentUser) {
      console.log(`${currentUser.userName} just logged in`);
      onlineNow = currentUser;
      localStorage.setItem("onlineNow", JSON.stringify(onlineNow));
      clearFIelds();
      window.location.assign("index.html");
    } else alert("User not found");
  }
  /////////////
  function checkUserName(user) {
    const el = (el) => el.userName.toLowerCase() === user.toLowerCase();
    let check = users.some(el);
    return check;
  }
  /////clear input fields
  function clearFIelds() {
    $(".username").val("");
    $(".password").val("");
    $(".createUsername").val("");
    $(".createPassword").val("");
  }
  
  function closeModal() {
    $("#exampleModal").modal("hide");
  }
  
  $(".loginBtn").on("click", login);
  $(".registerBtn").on("click", newUser);
  $(window).on("load", loadPage);
  
  function saveChanges() {
    let username = $(".createUsername").val();
    let password = $(".createPassword").val();
    console.log(username, password);
    clearFIelds();
    closeModal();
  }
  
  ////logout function
  function logOut(e) {
    e.preventDefault();
    onlineNow = {};
    localStorage.removeItem("onlineNow");
    window.location.assign("login.html");
  }
  
  $("#logoutBtn").on("click", logOut);