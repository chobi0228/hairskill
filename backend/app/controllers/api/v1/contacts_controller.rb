class Api::V1::ContactsController < Api::V1::ApplicationController
  extend ManualProcess

  def index
    manual_process(1, Contact)
  end

  def show
    manual_process(2, Contact)
  end

  def edit
    manual_process(2, Contact)
  end

  def create
    manual_process(3, Contact, )
  end

  def update
    manual_process(4, Contact)
  end

  def destroy
    manual_process(5, Contact)
  end
  private
  
end
