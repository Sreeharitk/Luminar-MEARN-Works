# Oil question
# def earliest_time_to_collect_oil(C, F, X):
#     current_rate = 2.0  # Initial rate of drawing oil
#     current_time = 0.0
#     total_oil = 0.0

#     while total_oil < X:
#         time_to_next_well = C / current_rate
#         time_to_target = (X-total_oil) / current_rate
#         print(time_to_target)

#         if time_to_next_well <= time_to_target:
#             current_time += time_to_next_well
#             total_oil += C
#             current_rate += F
            
#         else:
#             current_time += time_to_target
#             total_oil = X

#     return "{:.7f}".format(current_time)

# print(earliest_time_to_collect_oil(30.0,1.0,40.0))