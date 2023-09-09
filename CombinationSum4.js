/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let dp =new Array(target+1)
    dp.fill(-1)
  // return recursiveCombinationSum(nums,target,dp)
  return dpCombinationSum(nums,target)

};

var recursiveCombinationSum = function(candidates,target,dp) {
   //console.log("temp",temp)
  /*
  if(target==0){
            console.log("temp",temp)
            ans.push(temp);
        return
    }
    */
    if(target==0){
        return 1;
    }

    if(target<=-1)
        return 0;

    if(dp[target]!=-1)
        return dp[target]

    let ans =0;
    for(let i=0;i<candidates.length;i++){

           //console.log("candidates[i]",candidates[i])
            ans+=recursiveCombinationSum(candidates,target-candidates[i],dp)
    }
    dp[target]=ans
    return dp[target]
};

var dpCombinationSum = function(candidates,target) {
    let dp =new Array(target+1)
    dp.fill(0)
    dp[0]=1;

    for(let targetIndex=1;targetIndex<=target;targetIndex++){
        for(let j=0;j<candidates.length;j++){

           //console.log("candidates[i]",candidates[i])
            if(targetIndex-candidates[j]>=0)
                dp[targetIndex]+=dp[targetIndex-candidates[j]]
        }
    }
    return dp[target]
}