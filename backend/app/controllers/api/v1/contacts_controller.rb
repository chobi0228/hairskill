class Api::V1::ContactsController < Api::V1::ApplicationController
  extend ManualProcess
  def new
    Contact.create()
  end

  def index
    Contact.all
  end

end
