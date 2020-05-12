require 'test_helper'

class LeadersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @leader = leaders(:one)
  end

  test "should get index" do
    get leaders_url, as: :json
    assert_response :success
  end

  test "should create leader" do
    assert_difference('Leader.count') do
      post leaders_url, params: { leader: { age: @leader.age, name: @leader.name, race: @leader.race, rank: @leader.rank, sex: @leader.sex } }, as: :json
    end

    assert_response 201
  end

  test "should show leader" do
    get leader_url(@leader), as: :json
    assert_response :success
  end

  test "should update leader" do
    patch leader_url(@leader), params: { leader: { age: @leader.age, name: @leader.name, race: @leader.race, rank: @leader.rank, sex: @leader.sex } }, as: :json
    assert_response 200
  end

  test "should destroy leader" do
    assert_difference('Leader.count', -1) do
      delete leader_url(@leader), as: :json
    end

    assert_response 204
  end
end
