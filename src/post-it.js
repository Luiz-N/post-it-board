function Board (el) {
  this.el = $(el);
  this.posts = [];

  this.init();

}

Board.prototype.init = function() {
  var board = this;

  this.el.on('click', function(event) {
    // console.log(board.el.html(event.clientX));
    var x = event.clientX;
    var y = event.clientY;
    board.addPost(x,y);
  });
};

Board.prototype.addPost = function(x,y) {
  var post = new PostIt(x,y);
  this.posts.push(post);

  this.pinPost(post);
};


Board.prototype.pinPost = function(post) {
  post.el.appendTo('#board');

  post.el.css({
    left: post.x,
    top: post.y
  });

  post.el.on('click', function(event) {
    event.stopPropagation();
    /* Act on the event */
  });
  post.el.draggable({handle: '.header'});

};

function PostIt (x,y) {
  this.x = x;
  this.y = y;
  this.el = $('<div class="post-it"><p class="header"><span>X</span></p><div class="content" contenteditable="true"></div></div>');


  this.el.find('span').click(function(event) {
    console.log(this);
    $(this).parents('.post-it').remove();
    event.stopPropagation();
  });
}

$(function() {
  // This code will run when the DOM has finished loading
  board = new Board('#board');
});

