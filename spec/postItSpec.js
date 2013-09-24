describe("Board", function() {
  beforeEach(function() {
    $("body").append("<div id='board'></div>");
  });

  afterEach(function() {
    $("#board").remove();
  });

  describe("board", function(){
    it("finds the dom element provided", function(){
      var board = new Board("#board");

      expect(board.el).toEqual($('#board'));
    });
  });

  describe("when initializing the board", function  () {
    it("clicking the board creates a new post",function () {
      var board = new Board('#board');
      spyOn(board, "addPost");
      var clickEvent = jQuery.Event("click");
      clickEvent.clientX = 23;
      clickEvent.clientY = 53;

      board.el.trigger(clickEvent);
      expect(board.addPost).toHaveBeenCalledWith(23,53);

    });

    it("clicking on a board creates a post", function() {
      var board = new Board('#board');
      posts = board.posts.length;
      board.addPost();
      expect(board.posts.length - posts).toEqual(1);
    });
  });
  it("post gets appended to board", function () {
    var board = new Board('#board');
    var clickEvent = jQuery.Event("click");
      clickEvent.clientX = 23;
      clickEvent.clientY = 53;

      board.el.trigger(clickEvent);

      expect(board.el.children('.post-it').length).toBe(1);

  });

});

