module ManualProcess
  extend ActiveSupport::Concern
    def manual_process(action_number, model_name, register_params=nil)
        case action_number
        when 1 then # index
            render json: model_name.all
        when 2 then # show or edit
            render json: model_name.find(params[:id])
        when 3 then # create
            render json: model_name.create(register_params)
        when 4 then # update
            render json: model_name.update(register_params)
        when 5 then # destroy
            model_name.destroy(params[:id])
        when 6 then # follow
        when 7 then # follower

        else
        end
    end
end