class PostsController < ApplicationController
  before_action :set_post, only: :destroy

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all

    respond_to do |format|
      format.json {render json: @posts, key_transform: :camel_lower, status: :ok}
      format.html
    end
  end

  # POST /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.json {render json: @post, key_transform: :camel_lower, status: :ok}
      else
        format.json {render json: @post.errors, status: :unprocessable_entity}
      end
    end
  end

  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.json {render json: @post, key_transform: :camel_lower, status: :ok}
      # format.json {head :no_content}
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def post_params
    params.require(:post).permit(:name, :description)
  end
end
