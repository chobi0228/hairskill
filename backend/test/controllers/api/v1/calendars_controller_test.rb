require "test_helper"

class Api::V1::CalendarsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_calendars_index_url
    assert_response :success
  end

  test "should get new" do
    get api_v1_calendars_new_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_calendars_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_v1_calendars_edit_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_calendars_create_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_calendars_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_calendars_destroy_url
    assert_response :success
  end
end
