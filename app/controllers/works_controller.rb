class WorksController < ApplicationController
  #before_filter :authenticate_user!, except: [:release_show_via_ajax_call]

  def new
    @work = Work.new
  end

  def create
    @work = Work.create(work_params)
    respond_to do |format|
      format.html { redirect_to root_path }
    end
  end

  def edit
    @work = Work.find(params[:id])
  end

  def update   
    @work = Work.find(params[:id])
    if @work.update_attributes(work_params)
      respond_to do |format|
       format.html { redirect_to root_path }
       format.json { render :json => @work }
      end
    else
      respond_to do |format|
        format.html { render :action  => :edit } # edit.html.erb
        format.json { render :nothing =>  true }
      end
    end
  end

  def destroy
    @work = Work.find(params[:id])
    @work.destroy
    respond_to do |format|
      format.html { redirect_to root_path }
    end
  end
  
  def index
    @works = Work.all
  end
  
  def show
    @work = Work.find(params[:id])
    render :show, flush: true
  end
  
  def work_show_via_ajax_call
    @work = Work.find(params[:id])
    render :json => @work
  end
  
  def work_show_next_via_ajax_call
    @work = Work.find(params[:id]).next
    render :json => @work
  end
  
  def work_show_prev_via_ajax_call
    @work = Work.find(params[:id]).prev
    render :json => @work
  end
  
  def send_object_via_ajax
    @work = Work.find(params[:id])
    render :json => @work
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_work
    @work = Work.find(params[:id])
  end
  
  def work_params
    params.require(:work).permit(:title, :client, :description, :vimeo, :image)
  end
  
end