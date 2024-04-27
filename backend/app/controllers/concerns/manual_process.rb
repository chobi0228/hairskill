module ManualProcess
  extend ActiveSupport::Concern
    def manual_process(action_number, model_name, register_params=nil)
        case action_number
        when 1 then # index
            index_value = model_name.all
            render json: index_value
        when 2 then # show or edit
            find_value = model_name.find(params[:id])
            render json: find_value
        when 3 then # create
            render json: model_name.create(register_params)
        when 4 then # update
            render json: model_name.update(register_params)
        when 5 then # destroy
            render json: model_name.update(register_params)
        when 6 then # follow
            render json: model_name.follows
        when 7 then # follower
            render json: model_name.followers
        else
        end
    end
end